var app = angular.module('pacmanApp', []);

app.controller('pacmanCtrl', [
    '$scope',
    function($scope) {
        $scope.grid = {
            xMin: 0,
            yMin: 0,
            xMax: 5,
            yMax: 5
        }
        $scope.pacman = {
            x: 0,
            y: 0,
            direction: "north",
            placed: false
        }

        $scope.place = function() {
            $scope.pacman.placed = true;
            $scope.pacman.x = getRandomArbitrary($scope.grid.xMin, $scope.grid.xMax + 1);
            $scope.pacman.y = getRandomArbitrary($scope.grid.yMin, $scope.grid.yMax + 1);
            var randomDirection = getRandomArbitrary(0, 4);
            $scope.pacman.direction = (function() {
                if(randomDirection == 0) {
                    return "north";
                }
                if(randomDirection == 1) {
                    return "east";
                }
                if(randomDirection == 2) {
                    return "south";
                }
                if(randomDirection == 3) {
                    return "west";
                }
            })();
        }

        $scope.move = function() {
            if($scope.pacman.placed) {
                switch($scope.pacman.direction) {
                    case "north":
                        if ($scope.pacman.y >= $scope.grid.yMax) {
                            $scope.pacman.y = $scope.grid.yMax;
                        } else {
                            $scope.pacman.y += 1;
                        }
                        break;
                    case "east":
                        if ($scope.pacman.x >= $scope.grid.xMax) {
                            $scope.pacman.x = $scope.grid.xMax;
                        } else {
                            $scope.pacman.x += 1;
                        }
                        break;
                    case "south":
                        if ($scope.pacman.y <= $scope.grid.yMin) {
                            $scope.pacman.y = $scope.grid.yMin;
                        } else {
                            $scope.pacman.y -= 1;
                        }
                        break;
                    case "west":
                        if ($scope.pacman.x <= $scope.grid.xMin) {
                            $scope.pacman.x = $scope.grid.xMin;
                        } else {
                            $scope.pacman.x -= 1;
                        }
                        break;
                }
            }
        }

        $scope.left = function() {
            if($scope.pacman.placed) {
                switch($scope.pacman.direction) {
                    case "north":
                        $scope.pacman.direction = "west";
                        break;
                    case "east":
                        $scope.pacman.direction = "north";
                        break;
                    case "south":
                        $scope.pacman.direction = "east";
                        break;
                    case "west":
                        $scope.pacman.direction = "south";
                        break;
                }
            }
        }

        $scope.right = function() {
            if($scope.pacman.placed) {
                switch($scope.pacman.direction) {
                    case "north":
                        $scope.pacman.direction = "east";
                        break;
                    case "east":
                        $scope.pacman.direction = "south";
                        break;
                    case "south":
                        $scope.pacman.direction = "west";
                        break;
                    case "west":
                        $scope.pacman.direction = "north";
                        break;
                }
            }
        }

        $scope.report = function() {
            console.log('X: ', $scope.pacman.x);
            console.log('Y: ', $scope.pacman.y);
            console.log('Direction: ', $scope.pacman.direction)
        }
    }


]);

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}