import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const createOrder = async (req: any, res: any) => {
  try {
    const { user, pizza } = req.body;
    const { firstName, lastName, address, phone } = user;
    const { size, pepperoni, sausage, meatball, salami, mushroom, jalapeno, olive, garlic, onion, greenPepper, pineapple, basil, tomato, anchovy } = pizza;
    if (!user || !pizza) {
      return res.status(400).json({ message: 'User and Pizza are required' });
    }

    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        address,
        phone
      },
    });
    console.log(newUser);

    const newPizza = await prisma.pizza.create({
      data: {
        size,
        pepperoni,
        sausage,
        meatball,
        salami,
        mushroom,
        jalapeno,
        olive,
        garlic,
        onion,
        greenPepper,
        pineapple,
        basil,
        tomato,
        anchovy,
        userId: newUser.id,
      },
    });
    console.log(newPizza);
    res.status(200).json({ user: newUser, pizza: newPizza});
  } catch (err) {
    console.error('Error creating order:', err);
    res.status(500).json({ message: 'Failed to create order', err });
  }
};

export default createOrder;
