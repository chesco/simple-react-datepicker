using System.Web;
using System.Web.Optimization;
using System.Web.Optimization.React;

namespace date_picker_vs
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            //this bundle was generated for simple-react-datepicker
            bundles.Add(new BabelBundle("~/bundles/datepicker").Include(
               "~/Scripts/simple-react-datepicker/DateUtilities.jsx",
               "~/Scripts/simple-react-datepicker/Week.jsx",
               "~/Scripts/simple-react-datepicker/Weeks.jsx",
               "~/Scripts/simple-react-datepicker/WeekHeader.jsx",
               "~/Scripts/simple-react-datepicker/Month.jsx",
               "~/Scripts/simple-react-datepicker/Calendar.jsx",
               "~/Scripts/simple-react-datepicker/DatePicker.jsx"));
        }
    }
}
