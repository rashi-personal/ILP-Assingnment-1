using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace ilp_assignment_3
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Customer customer = new GoldCustomerRegister
            {
                CustomerId = 58,
                FirstName = "rashi",
                LastName = "jain",
                Email = "rashi12@gmail.com"
            };
            customer.Register();

            IGetDiscount newDiscount = new GoldCustomerDiscount();
            newDiscount.GetDiscountPercentage();

            IProcessOrder process = new ProcessOrdered(newDiscount);
            process.ProcessOrder();
        }
    }
    public class Customer
    {
        public int CustomerId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        //public CustomerType Type { get; set; }
        public virtual void Register()
        {
            Console.WriteLine("customer is registered");
        }       
    }
    public class PlatinumCustomerRegister : Customer 
    { 
        public override void Register ()
        {
            Console.WriteLine($"{FirstName} is register as a Platinum customer");
        }
    }
    public class GoldCustomerRegister : Customer
    {
        public override void Register()
        {
            Console.WriteLine($"{FirstName} is register as a Gold customer");
        }
    }
    public class SilverCustomerRegister : Customer
    {
        public override void Register()
        {
            Console.WriteLine($"{FirstName} is register as a Silver customer");
        }
    }
    public class BronzeCustomerRegister : Customer
    {
        public override void Register()
        {
            Console.WriteLine($"{FirstName} is register as a Bronze customer");
        }
    }

    public interface ISaveCustomer
    {
        bool SaveCustomer();
    }

    public class SavedCustomer : ISaveCustomer 
    {
        private Customer _customer;

        public SavedCustomer(Customer customer) 
        {
            _customer = customer;
        }

        public bool SaveCustomer()
        {
            Console.WriteLine($"{_customer.FirstName} is saved");
            return true;
        }
    }

    public interface IGetDiscount
    {
        int GetDiscountPercentage();
    }

    public class PlatinumCustomerDiscount: IGetDiscount 
    {
        public int GetDiscountPercentage()
        {
            return 10;
        }
    }
    public class GoldCustomerDiscount : IGetDiscount
    {
        public int GetDiscountPercentage()
        {
            return 20;
        }
    }
    public class SilverCustomerDiscount : IGetDiscount
    {
        public int GetDiscountPercentage()
        {
            return 15;
        }
    }
    public class BronzeCustomerDiscount : IGetDiscount
    {
        public int GetDiscountPercentage()
        {
            return 10;
        }
    }

    public interface IProcessOrder
    {
        void ProcessOrder();
    }

    public class ProcessOrdered : IProcessOrder
    {
        private IGetDiscount _GetDiscount;

        public ProcessOrdered(IGetDiscount getDiscount)
        {
            _GetDiscount = getDiscount;
        }

        public void ProcessOrder()
        {

            //Discount
            var discount = _GetDiscount.GetDiscountPercentage();
            //Message
            Console.WriteLine($"Customer got discount of {discount}");
            Console.WriteLine("order placed");


        }
    }
    public class Leads : Customer
    {
        //It is just a lead so need to save it in the database
        public string name;
        public string email;

        public void GetLeadDetails()
        {
            Console.WriteLine($"{name}");
        }
    }
}
