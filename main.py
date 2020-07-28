import sfserver.routes.sf_routes as client




cli = client.SFRoutes("sam", "earnest")
print(cli.get_positions_current())