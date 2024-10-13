"use client"

import { useCart } from '@/lib/cartUtils';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link';
import { toast } from 'sonner';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleRemove = (id: string) => {
    removeFromCart(id);
    toast.success('Item removed from cart');
  };

  const handleQuantityChange = (id: string, newQuantity: number) => {
    updateQuantity(id, newQuantity);
    toast.success('Cart updated');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <Card key={item.id} className="mb-4">
              <CardHeader>
                <CardTitle>{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Price: ${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </Button>
                  <span className="mx-2">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <p className="font-bold">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
                <Button variant="destructive" onClick={() => handleRemove(item.id)}>Remove</Button>
              </CardFooter>
            </Card>
          ))}
          <div className="mt-8">
            <p className="text-xl font-bold mb-4">Total: ${total.toFixed(2)}</p>
            <Link href="/shop">
              <Button className="mr-4">Continue Shopping</Button>
            </Link>
            <Button>Proceed to Checkout</Button>
          </div>
        </>
      )}
    </div>
  );
}