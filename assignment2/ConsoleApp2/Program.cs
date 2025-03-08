using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    public class Logger
    {
        public virtual void log()
        {
            Console.WriteLine("This is logger");
        }
    }
    public class DatabaseLogger : Logger
    {
        public override void log()
        {
            Console.WriteLine("this is a databaselogger");
        }
    }
    public class fileLogger : Logger
    {
        public override void log()
        {
            Console.WriteLine("this is a filelogger");
        }
    }
    public class cloudLogger : Logger
    {
        public override void log()
        {
            Console.WriteLine("this is a cloudlogger");
        }
    }



}
