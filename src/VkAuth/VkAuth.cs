using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ExtCore.Mvc.Infrastructure;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Routing;

namespace VkAuth
{
    public class VkAuth: ExtensionBase
	{
		public override IEnumerable<KeyValuePair<int, Action<IRouteBuilder>>> UseMvcActionsByPriorities
		{
			get
			{
				return new Dictionary<int, Action<IRouteBuilder>>()
				{
					[1000] = routeBuilder =>
					{
						routeBuilder.MapRoute(name: "Default", template: "{controller}/{action}");
					}
				};
			}
		}
	}
}
