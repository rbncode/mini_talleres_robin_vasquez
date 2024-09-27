// https://www.codewars.com/kata/550f22f4d758534c1100025a/javascript

function dirReduc(arr) {
        let optimal = "";

        for (let string of arr) {
            optimal = (optimal + "," + string)
                .replace(",EAST,WEST", "")
                .replace(",WEST,EAST", "")
                .replace(",SOUTH,NORTH", "")
                .replace(",NORTH,SOUTH", "");
        }

        return optimal === "" ? [] : optimal.substring(1).split(",");
}
