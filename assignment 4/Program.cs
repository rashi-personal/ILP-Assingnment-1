using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace assignment_4
{
    class Program
    {
        public class FoodItem
        {
            public int Id;
            public string Name;
            public double Price;
            public string Category;

            public FoodItem(int id, string name, double price, string category)
            {
                Name = name;
                Id = id;
                Price = price;
                Category = category;

            }

        }
        public static List<FoodItem> MenuItems = new List <FoodItem>();

        public static Dictionary<int, FoodItem> OrdersList = new Dictionary <int, FoodItem>();

        public static Queue<FoodItem> PendingOrders = new Queue <FoodItem>();

        public static Stack<FoodItem> DeliveredOrders = new Stack <FoodItem>();

        public static HashSet<string>UniqueFoodCategory = new HashSet <string>();
        public static void AddFoodItem()
        {
            Console.Write("Enter the food item to be added in menu");

            Console.Write("Enter the id of the food item: ");
            int id = int.Parse(Console.ReadLine());

            Console.Write("Enter the name of the food item: ");
            string name = Console.ReadLine();

            Console.Write("Enter the Price of the food item: ");
            double price = double.Parse(Console.ReadLine());

            Console.Write("Enter the Category of the food item: ");
            string category = Console.ReadLine();
            Console.WriteLine("Your item is added in menu");

            FoodItem foodItem = new FoodItem(id, name, price, category);

            MenuItems.Add(foodItem);
            UniqueFoodCategory.Add(foodItem.Category);

        }
        public static void ShowMenu()
        {
            Console.WriteLine("The menu ");
            foreach (var item in MenuItems)
            {
                Console.WriteLine($"Id: {item.Id}, Name: {item.Name}, Price: {item.Price}, Category: {item.Category}");
            }

        }
        public static void PlaceOrder()
        {
            Console.WriteLine("Enter the food id");
            int id = int.Parse(Console.ReadLine());

            bool isThere = false;

            foreach (var item in MenuItems)
            {
                if (item.Id == id)
                {
                    OrdersList.Add(item.Id, item);
                    PendingOrders.Enqueue(item);
                    isThere = true;
                }

            }
            if (isThere == true)
            {
                Console.WriteLine("Your order has been placed");
            }
            else
            {
                Console.WriteLine("Your order has not been placed");
            }
        }
        public static void DeliverOrder()
        {
            bool isDelivered = false;
            if (PendingOrders.Count > 0)
            {
                DeliveredOrders.Push(PendingOrders.Dequeue());
                isDelivered = true;
            }

            if (isDelivered)
            {
                Console.WriteLine("The order is delvered");
            }
            else
            {
                Console.WriteLine("The order is not delvered");
            }

        }
        public static void ShowPendingDeliveries()
        {
            Console.WriteLine("The pending orders are");
            foreach (var item in PendingOrders)
            {
                Console.WriteLine($"Id: {item.Id}, Name: {item.Name}, Price: {item.Price}, Category: {item.Category}");
            }

        }
        public static void ShowDeliveredOrders()
        {
            Console.WriteLine("The delivered orders are");
            foreach (var item in DeliveredOrders)
            {
                Console.WriteLine($"Id: {item.Id}, Name: {item.Name}, Price: {item.Price}, Category: {item.Category}");
            }

        }
        public static void ShowFoodCategories()
        {
            Console.WriteLine("The food catgories we have");
            foreach (var item in UniqueFoodCategory)
            {
                Console.WriteLine($"{item}");
            }

        }



        static void Main(string[] args)
        {
            Console.WriteLine("Welcome to food ordering system");
            while (true)
            {
                Console.WriteLine("1. Add Food Item");
                Console.WriteLine("2. Show Menu");
                Console.WriteLine("3. Place Order");
                Console.WriteLine("4. Deliver Order");
                Console.WriteLine("5. Show Pending Deliveries");
                Console.WriteLine("6. Show Delivered Orders");
                Console.WriteLine("7. Show Food Categories");
                Console.WriteLine("8. Exit");
                Console.Write("Enter your choice: ");

                string choice = Console.ReadLine();

                if (choice == "1")
                {
                    AddFoodItem();
                }
                else if (choice == "2")
                {
                    ShowMenu();
                }
                else if (choice == "3")
                {
                    PlaceOrder();
                }
                else if (choice == "4")
                {
                    DeliverOrder();
                }
                else if (choice == "5")
                {
                    ShowPendingDeliveries();
                }
                else if (choice == "6")
                {
                    ShowDeliveredOrders();
                }
                else if (choice == "7")
                {
                    ShowFoodCategories();
                }
                else if (choice == "8")
                {
                    break;
                }
                else
                {
                    Console.WriteLine("Your choice is wrong, enter a valid choice");
                }
            }
        }
    }
}
