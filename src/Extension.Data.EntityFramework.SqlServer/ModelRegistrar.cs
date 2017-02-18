using ExtCore.Data.EntityFramework.SqlServer;
using Extension.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Extension.Data.EntityFramework.SqlServer
{
    public class ModelRegistrar : IModelRegistrar
    {
        public void RegisterModels(ModelBuilder modelbuilder)
        {
            modelbuilder.Entity<Person>(etb =>
            {
                etb.HasKey(e => e.Id);
                etb.Property(e => e.Id);
                etb.ForSqlServerToTable("Person");
            }
            );
        }
    }
}
