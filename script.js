function calculateLoan() {
    const employeeId = document.getElementById('employeeId').value;
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const designation = document.getElementById('designation').value;
    const mobileNumber = document.getElementById('mobileNumber').value;
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const loanDate = new Date(document.getElementById('loanDate').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const maturityDate = new Date(document.getElementById('maturityDate').value);
  
    if (!/^E.{3,}$/.test(employeeId)) {
      alert("Employee ID must be of minimum four characters and start with 'E'");
      return;
    }
     // Validate California mobile number with country code +1
    if (!/^\+1[0-9]{10}$/.test(mobileNumber)) {
    alert("Enter a valid California mobile number (+1 followed by 10 digits)");
    return;
    }
    const timeDiff = maturityDate - loanDate;
    const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
  
    const interest = loanAmount * interestRate * (daysDiff / 365);
    const totalAmount = loanAmount + interest;
  
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<p>Loan Amount: $${loanAmount.toFixed(2)}</p>
                          <p>Interest: $${interest.toFixed(2)}</p>
                          <p>Total Amount Payable: $${totalAmount.toFixed(2)}</p>`;
  }
  