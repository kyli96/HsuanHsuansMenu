using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(HsuanHsuansMenu.Startup))]
namespace HsuanHsuansMenu
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
