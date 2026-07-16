/* ============================================================
   TRY / CATCH
   Run risky code in try; if it errors, catch handles it
   instead of crashing the program.
   ============================================================ */

try{
    hellot.toUpperCase()//this is an error
} catch{
    console.log('error')
}