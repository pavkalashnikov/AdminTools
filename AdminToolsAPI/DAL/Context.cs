using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using AdminToolsAPI.Models;

namespace AdminToolsAPI.DAL
{
    public class Context : DbContext
    {
        public Context() : base("AdminToolsDB")
        {
            
        }

        public DbSet<TestModel> TestModels { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}