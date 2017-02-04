"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var item_service_1 = require('./item.service');
var ItemComponent = (function () {
    function ItemComponent(itemService, router) {
        this.itemService = itemService;
        this.router = router;
    }
    ItemComponent.prototype.onSelect = function (item) {
        this.selectedItem = item;
    };
    ItemComponent.prototype.getItems = function () {
        var _this = this;
        this.itemService.getItems()
            .then(function (items) {
            _this.items = items;
        });
    };
    ItemComponent.prototype.add = function (type) {
        var _this = this;
        type = type.trim();
        if (!type) {
            return;
        }
        this.itemService.create(type)
            .then(function (item) {
            _this.items.push(item);
            _this.selectedItem = null;
        });
    };
    ItemComponent.prototype.delete = function (item) {
        var _this = this;
        this.itemService
            .delete(item.id)
            .then(function () {
            _this.items = _this.items.filter(function (i) { return i !== item; });
            if (_this.selectedItem === item) {
                _this.selectedItem = null;
            }
        });
    };
    ItemComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedItem.id]);
    };
    ItemComponent.prototype.ngOnInit = function () {
        this.getItems();
    };
    ItemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-items',
            templateUrl: './item.component.html',
            styleUrls: [
                './item.component.css'
            ]
        }), 
        __metadata('design:paramtypes', [item_service_1.ItemService, router_1.Router])
    ], ItemComponent);
    return ItemComponent;
}());
exports.ItemComponent = ItemComponent;
//# sourceMappingURL=item.component.js.map