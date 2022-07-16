function runProgram(input) {
    input = input.trim().split("\n");
    let tc = +input[0];
    let line = 1;
    for(let t=0;t<tc;t++){
        let n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        let pick = 1
        solve(arr,0,n-1,)
        function solve(arr,low,high){
        let mid = Math.floor(low+(high-low)/2)//2,1,0
        //base case
        if(low===high){//true
            return
        }
        //counter condition
        if(arr[mid]>arr[pick]){
            pick = mid;
        }
        solve(arr,low,mid)
        solve(arr,mid+1,high);//0,2,1
    }
    
    console.log(pick)
    }
  }
  if (process.env.USER === "") {
    runProgram(``);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }
  
  