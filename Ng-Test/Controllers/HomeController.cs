using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Ng_Test.Models;

namespace Ng_Test.Controllers
{
    public class HomeController : Controller
    {
        StudentEntities db = new StudentEntities();
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        // view data 
        public JsonResult GetStudent()
        {
            List<StudentInfo> studentInfos = db.StudentInfoes.ToList();
            List<studentDTO> sdio = studentInfos.Select(x => new studentDTO
            {
                StudentId = x.StudentId,
                StudentName=x.StudentName,
                Role=x.Role,
                Address=x.Address

            }).ToList();
            return Json(sdio, JsonRequestBehavior.AllowGet);  
        }

        // Insert data .............................
        public JsonResult InserStudent(StudentInfo studentInfo)
        {
            if (studentInfo!=null)
            {
                db.StudentInfoes.Add(studentInfo);
                db.SaveChanges();
                return Json(new { success = true });
            }
            else
            {
                return Json(new { success=false});
            }
        }
        public ActionResult MyApp()
        {
            return View();
        }
    }
}