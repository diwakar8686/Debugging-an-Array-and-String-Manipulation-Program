function manageStudents() {
    let students = ["Alice", "Bob", "Charlie"];
    students.splice(1, 0, "David");
    console.log("Does Eve exist in the list?", students.includes("Eve")); 
    console.log("Student list:", students.join(","));
    return students;
}
function testManageStudents() {
    console.log("Initial Test:");
    const result = manageStudents();
    console.log("\nTest: Adding a name at a different position:");
    let students = ["Alice", "Bob", "Charlie"];
    students.splice(2, 0, "Eve");
    console.log("Expected:", "Alice,Bob,Eve,Charlie");
    console.log("Result:", students.join(",")); 
    console.log("\nTest: Checking a name that exists:");
    console.log("Does Bob exist in the list?", students.includes("Bob")); 
    console.log("\nTest: Checking a name that doesn't exist:");
    console.log("Does Zach exist in the list?", students.includes("Zach")); 
    console.log("\nTest: Joining an empty array:");
    students = [];
    console.log("Expected:", "");
    console.log("Result:", students.join(",")); 
    console.log("\nTest: Joining a single-element array:");
    students = ["Alice"];
    console.log("Expected:", "Alice");
    console.log("Result:", students.join(","));
}
testManageStudents();
