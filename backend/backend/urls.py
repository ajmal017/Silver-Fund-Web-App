from django.urls import include, path
from rest_framework import routers
from api import views
from django.contrib import admin

router = routers.DefaultRouter()
router.register(r"users", views.UserViewSet)
router.register(r"groups", views.GroupViewSet)
router.register(r"all_positions", views.AllPositions, basename='AllPositions')
router.register(r"current_positions", views.CurrentPositions, basename='CurrentPositions')
router.register(r"trades", views.TradeViewSet) 
router.register(r"assets", views.AssetViewSet)

urlpatterns = [
    path("", include(router.urls)),
    path("api-auth/", include("rest_framework.urls", namespace="rest_framework")),
    path("admin/", admin.site.urls),

    path("api/positions/current/", views.get_cur_positions),
    path("api/positions/filter/date/", views.filter_positions_by_date),

    path("api/trades/current/", views.get_cur_trades),
    path("api/trades/unsettled/", views.get_unsettled_trades),

    path("api/ibaccount/cashbalance/", views.get_cashbalance),

    path("api/update/positions/", views.update_positions),
    path("api/update/trades/", views.update_trades),  
]


