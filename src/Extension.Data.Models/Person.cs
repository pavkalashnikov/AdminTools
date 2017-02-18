using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ExtCore.Data.Models.Abstractions;

namespace Extension.Data.Models
{
	public class Person : IEntity
	{
		public int Id { get; set; }
		public string Name { get; set; }
	}
}
