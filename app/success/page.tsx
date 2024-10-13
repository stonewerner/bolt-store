"use client"

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from "@/components/ui/button"

export default function Success() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await fetch(`/api/check-session?session_id=${sessionId}`);
        const data = await response.json();
        if (data.status === 'complete') {
          setStatus('success');
        } else {
          setStatus('error');
        }
      } catch (error) {
        console.error('Error fetching session:', error);
        setStatus('error');
      }
    };

    if (sessionId) {
      fetchSession();
    } else {
      setStatus('error');
    }
  }, [sessionId]);

  if (status === 'loading') {
    return <div className="text-center py-12">Loading...</div>;
  }

  if (status === 'error') {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Oops! Something went wrong.</h1>
        <p className="mb-8">We couldn't confirm your order. Please contact our support team.</p>
        <Link href="/shop">
          <Button>Return to Shop</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="text-center py-12">
      <h1 className="text-3xl font-bold mb-4">Thank you for your purchase!</h1>
      <p className="text-xl mb-8">Your order has been successfully processed.</p>
      <p className="mb-8">We'll send you an email with your order details and tracking information once your item has shipped.</p>
      <Link href="/shop">
        <Button>Continue Shopping</Button>
      </Link>
    </div>
  );
}