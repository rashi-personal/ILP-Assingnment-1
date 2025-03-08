using System;
using System.Collections.Generic;
using System.Diagnostics.Eventing.Reader;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp2
{
    class Program
    {
        static void Main(string[] args)
        {
            Logger logger = GetLogger("file");
            logger.log();
            Logger logger1 = GetLogger("cloud");
            logger1.log();
            Logger logger2 = GetLogger("database");
            logger2.log();
        }
        public static Logger GetLogger(string type)
        {
            if (type == "file")
            {
                return new fileLogger();
            }
            else if (type == "cloud")
           
            {
                return new cloudLogger();
            }
            else
            {
                return new DatabaseLogger();
            }
        }
    }
}

