namespace WebApplication1.Managers
{
    public interface IManager
    {
        public string GetAllBooks();
        public string GetBookById(int id);
        public string AddBook(Book book);
        public string UpdateBook(int id);
        public string DeleteBook(int id);
    }
}
