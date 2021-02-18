var app = angular.module("myShoppingList", []);

app.controller("myCtrl", function ($scope) {
    $scope.items = [
        {
            name: "Milk",
            done: false
        },
        {
            name: "Banana",
            done: false
        },
        // { 
        //     name: "Mango",
        //     done : "false"
        // },
        // { 
        //     name: "Candy",
        //     done : "false"
        // }, 
        // { 
        //     name: "Bread",
        //     done : "false"
        // },
    ]



    $scope.addItem = function () {
        console.log("addMe->", $scope.addMe);
        if ($scope.addMe.trim() != "") {

            $scope.names = $scope.items.map(item => item.name);
            console.log("names->", $scope.names);

            //check if name of item alredy exists
            if ($scope.names.indexOf($scope.addMe) != -1) {
                $scope.errortext = "Already added in list";
                return;
            }

            $scope.errortext = "";

            $scope.addToItems = {
                name: $scope.addMe,
                done: false
            };
            console.log("addItem->", $scope.addToItems);
            console.log("Items->", $scope.items);
            $scope.addMe = "";
            $scope.items.push($scope.addToItems)
        }
        //$scope.addItem = {};
    }

    $scope.removeItem = function (i) {
        $scope.items.splice(i, 1);
        console.log("Items->", $scope.items);
    }

    $scope.markasdoneornot = function (i) {
        if ($scope.items[i].done == false) {
            $scope.items[i].done = true;
        } else {
            $scope.items[i].done = false;
        }
    }

    $scope.sortList = function () {
        console.log("Items b4 sort->", $scope.items);
        $scope.originalItems = $scope.items;
        $scope.items = $scope.items.name.sort();
        console.log("Items after sort->", $scope.items);
    }

})
