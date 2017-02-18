using System.Collections.Generic;
using System.Linq;
using Extension.Data.Abstractions;
using Extension.Data.Models;

namespace Extension.Data.EntityFramework.SqlServer
{
	public class PersonRepository : ExtCore.Data.EntityFramework.SqlServer.RepositoryBase<Person>, IPersonRepository
	{
		public IEnumerable<Person> All()
		{
			return this.dbSet.ToList();
		}
	}
}
