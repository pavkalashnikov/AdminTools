using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ExtCore.Infrastructure;
using ExtCore.WebApplication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;

namespace AdminTools
{
    public class Startup : ExtCore.WebApplication.Startup
    {
        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);
        }

        public override void Configure(IApplicationBuilder app)
        {
            base.Configure(app);
        }

        public Startup(IServiceProvider serviceProvider) : base(serviceProvider)
        {
            this.serviceProvider.GetService<ILoggerFactory>().AddConsole();

            IConfigurationBuilder configurationBuilder = new ConfigurationBuilder()
              .SetBasePath(this.serviceProvider.GetService<IHostingEnvironment>().ContentRootPath)
              .AddJsonFile("config.json", optional: true, reloadOnChange: true);

            this.configurationRoot = configurationBuilder.Build();
        }
    }
}
