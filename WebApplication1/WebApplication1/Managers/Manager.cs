namespace WebApplication1.Managers
{
    public class Manager : IManager
    {
        public string AddBook(Book book)
        {
            return "Book added";
        }

        public string DeleteBook(int id)
        {
            return "Book Deleted";
        }

        public string GetAllBooks()
        {
            return "All Books recieved";
        }

        public string GetBookById(int id)
        {
            return "Book recieved of the id you provided";
        }

        public string UpdateBook(int id)
        {
            return "Book Updated";
        }
    }
}
