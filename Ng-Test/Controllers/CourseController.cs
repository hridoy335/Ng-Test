using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Ng_Test.Models;

namespace Ng_Test.Controllers
{
    public class CourseController : Controller
    {
        StudentEntities db = new StudentEntities();
        // GET: Course
        public ActionResult Index()
        {
            return View();
        }

        //Get course result
        public JsonResult GetCourse()
        {
            List<Course> courses = db.Courses.ToList();
            List<CourseDTO> sdio = courses.Select(x => new CourseDTO
            {
                CourseId = x.CourseId,
                CourseName = x.CourseName,
                CourseCredit = x.CourseCredit

            }).ToList();
            return Json(sdio, JsonRequestBehavior.AllowGet);
        }

        // Insert Course data 
        public JsonResult InserCourse(Course course)
        {
            if (course != null)
            {
                db.Courses.Add(course);
                db.SaveChanges();
                return Json(new { success=true});
            }
            else
            {
                return Json(new{ success=false});
            }
        }

        // public Course update

        public JsonResult CourseUpdate(Course course)
        {
            var i = db.Courses.Find(course.CourseId);
            if (i == null)
            {
                return Json(new { success=false});
            }
            else
            {
                i.CourseName = course.CourseName;
                i.CourseCredit = course.CourseCredit;
                db.SaveChanges();
                return Json(new { success=true});
            }
        }
    }
}