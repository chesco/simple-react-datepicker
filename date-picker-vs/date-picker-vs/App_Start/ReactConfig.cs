using React;

[assembly: WebActivatorEx.PreApplicationStartMethod(typeof(date_picker_vs.ReactConfig), "Configure")]

namespace date_picker_vs
{
	public static class ReactConfig
	{
		public static void Configure()
		{
            ReactSiteConfiguration.Configuration                
                .AddScript("~/Scripts/simple-react-datepicker/*.jsx");
        }
	}
}