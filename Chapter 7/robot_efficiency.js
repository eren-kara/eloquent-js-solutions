/*
Can you write a robot that finishes the delivery task faster than goalOrientedRobot?
If you observe that robot’s behavior, what obviously stupid things does it do?
How could those be improved?
If you solved the previous exercise, you might want to use your compareRobots function to verify whether you improved the robot.
*/

function myRobot({place, parcels}, route) {
    if(route.length === 0) {
        let routes = parcels.map(parcel => {
            if (parcel.place != place) {
              return {route: findRoute(roadGraph, place, parcel.place),
                      pickUp: true};
            } else {
              return {route: findRoute(roadGraph, place, parcel.address),
                      pickUp: false};
            }
          });
        route = routes.reduce((initialRoute, nextRoute) => {
            return calculateScore(initialRoute) < calculateScore(nextRoute) ? nextRoute : initialRoute
        }).route;
      

    }
    return {direction: route[0], memory: route.slice(1)}
}

function calculateScore({pickUp, route}) {
    return pickUp ? 1 : 0 - route.length;
}
