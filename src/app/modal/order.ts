import { Product } from './product';
export class Order {
  OrderId?: number
  OrderDate?: string
  UserId?: number
  Products?: productsOrder[]=[]
  PaymentType?: string
  total?: number
}
export class productsOrder
{
    ProductId?: number
    Quantity?: number=0;
}