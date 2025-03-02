using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    public class student
    {
        public string Name;
        public string course;
        public int age;
        public int Rollno;
    };

    class program
    {
        static void Main(string[] args)
        {
            student s1 = new student
            {
                Name = "Rishika Jain",
                course = "B.tech",
                Rollno = 58,
                age = 20
            };
            student s2 = new student
            {
                Name = "Rohit sharma",
                course = "Pharmacy",
                Rollno = 67,
                age = 21
            };
            student s3 = new student
            {
                Name = "Atishay sharma",
                course = "BSC",
                Rollno = 34,
                age = 19
            };
            Console.WriteLine("Rishika jain details:");
            Console.WriteLine($"Name: {s1.Name},Course: {s1.course}, Rollno: {s1.Rollno}, age:{s1.age}");

            Console.WriteLine("Rohit sharma details:");
            Console.WriteLine($"Name: {s2.Name},Course: {s2.course}, Rollno: {s2.Rollno}, age:{s2.age}");

            Console.WriteLine("Rohit sharma details:");
            Console.WriteLine($"Name: {s3.Name},Course: {s3.course}, Rollno: {s3.Rollno}, age:{s3.age}");

        }
    }
}
