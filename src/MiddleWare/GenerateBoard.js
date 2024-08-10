import axios from "axios";
async function GenerateBoard(){
    let data = await axios.get("https://sudoku-api.vercel.app/api/dosuku?query={newboard(limit:1){grids{value}}}");
    //console.log(data.data.newboard.grids[0].value);
    return data.data.newboard.grids[0].value;
    /*return [
        [" ","1"," ","0","9","0","9","9","45"],
        ["9","9","9","9","9","9","9","9","95"],
        ["9","9","9","9","9","9","9","9","9"],
        ["9","9","9","9","9","9","9","9","9"],
        ["9","9"," ","2","9","9","9","9","9"],
        ["9","9","9","9","9","9","9","9","9"],
        ["9","9","9","9","9","9","9","9","9"],
        ["9","9"," ","9"," ","9","9","9","9"],
        ["9","9","9","9","9","9","9","9","9"]
    ]*/
}

function checkSudoku(board){
    let result = isValidSudoku(board);
    return result;
}


function isinRange(board)
{
     let N = 9;
    // Traverse board[][] array
    for(var i = 0; i < N; i++) 
    {
        for(var j = 0; j < N; j++)
        {
             
            // Check if board[i][j]
            // lies in the range
            if (board[i][j]-"0" <= 0 ||
                board[i][j]-"0" > 9)
            {
                return false;
            }
        }
    }
    return true;
}
 
// Function to check if the solution
// of sudoku puzzle is valid or not
function isValidSudoku(board)
{
     
    // Check if all elements of board[][]
    // stores value in the range[1, 9]
    let N = 9;
    if (isinRange(board) == false)
    {
        return false;
    }
 
    // Stores unique value
    // from 1 to N
    var unique = Array(N+1).fill(false);
 
    // Traverse each row of
    // the given array
    for(var i = 0; i < N; i++)
    {
        unique = Array(N+1).fill(false);
 
        // Traverse each column
        // of current row
        for(var j = 0; j < N; j++) 
        {
 
            // Stores the value
            // of board[i][j]
            var Z = board[i][j]-"0";
 
            // Check if current row
            // stores duplicate value
            if (unique[Z])
            {
                return false;
            }
            unique[Z] = true;
        }
    }
 
    // Traverse each column of
    // the given array
    for(var i = 0; i < N; i++)
    {
 
        // Initialize unique[]
        // array to false
        unique = Array(N+1).fill(false);
 
        // Traverse each row
        // of current column
        for(var j = 0; j < N; j++)
        {
 
            // Stores the value
            // of board[j][i]
            var Z = board[j][i]-"0";
 
            // Check if current column
            // stores duplicate value
            if (unique[Z])
            {
                return false;
            }
            unique[Z] = true;
        }
    }
 
    // Traverse each block of
    // size 3 * 3 in board[][] array
    for(var i = 0; i < N - 2; i += 3) 
    {
         
        // j stores first column of
        // each 3 * 3 block
        for(var j = 0; j < N - 2; j += 3) 
        {
 
            // Initialize unique[]
            // array to false
            unique = Array(N+1).fill(false);
 
            // Traverse current block
            for(var k = 0; k < 3; k++)
            {
                for(var l = 0; l < 3; l++) 
                {
                     
                    // Stores row number
                    // of current block
                    var X = i + k;
 
                    // Stores column number
                    // of current block
                    var Y = j + l;
 
                    // Stores the value
                    // of board[X][Y]
                    var Z = board[X][Y]-"0";
 
                    // Check if current block
                    // stores duplicate value
                    if (unique[Z])
                    {
                        return false;
                    }
                    unique[Z] = true;
                }
            }
        }
    }
 
    // If all conditions satisfied
    return true;
}

export {GenerateBoard, checkSudoku};