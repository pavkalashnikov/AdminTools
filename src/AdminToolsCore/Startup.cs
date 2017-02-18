using System;
using System.Linq;
using ExtCore.Infrastructure;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace AdminToolsCore
{
	public class Startup : ExtCore.WebApplication.Startup
	{
		public Startup(IServiceProvider serviceProvider)
		  : base(serviceProvider)
		{
			this.serviceProvider.GetService<ILoggerFactory>().AddConsole();

			IConfigurationBuilder configurationBuilder = new ConfigurationBuilder()
			  .SetBasePath(this.serviceProvider.GetService<IHostingEnvironment>().ContentRootPath)
			  .AddJsonFile("config.json", optional: true, reloadOnChange: true);

			this.configurationRoot = configurationBuilder.Build();
		}
	}
}
