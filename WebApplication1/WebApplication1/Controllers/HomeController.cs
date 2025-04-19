using Microsoft.AspNetCore.Mvc;
using WebApplication1.Managers;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HomeController : Controller
    {
        private IManager _IManager;

        public HomeController(IManager bookManager)
        {
            _IManager = bookManager;
        }
        [HttpGet("/books")]
        public IActionResult GetAllBooks()
        {
            var res = _IManager.GetAllBooks();
            return Ok(res);
        }

        [HttpGet("/books/get")]
        public IActionResult GetBookbyId(int id)
        {
            var res = _IManager.GetBookById(id);
            return Ok(res);
        }
        [HttpPost("/books/add")]
        public IActionResult AddBook([FromBody] Book book)
        {
            var res = _IManager.AddBook(book);
            return Ok(res);
        }
        [HttpPut("/book/update")]
        public IActionResult UpdateBook(int id)
        {
            var res = _IManager.UpdateBook(id);
            return Ok(res);
        }
        [HttpDelete("/books/delete")]
        public IActionResult DeleteBook(int id)
        {
            var res = _IManager.DeleteBook(id);
            return Ok(res);
        }
    }  
}
public class Book
{
    public int Id { get; set; }
    public string Title { get; set; }
    public string Author { get; set; }
    public int yearOfPublication { get; set; }
}
