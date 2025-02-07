//Error Handling Demo
// Author https://nagvbt.github.io/
try {
    let result = JSON.parse("deepika");
    //throw('');
} catch (error) {
    console.log("error caught:", error.message);
}