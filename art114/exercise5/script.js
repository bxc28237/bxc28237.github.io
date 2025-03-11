<script>
        // Function to perform the addition
        function calculateSum() {
            // Get the values from the input fields
            var num1 = parseFloat(document.getElementById('num1').value);
            var num2 = parseFloat(document.getElementById('num2').value);
            
            // Check if both values are numbers
            if (isNaN(num1) || isNaN(num2)) {
                alert('Please enter valid numbers.');
            } else {
                // Calculate the sum and display it
                var sum = num1 + num2;
                document.getElementById('result').innerHTML = 'Sum: ' + sum;
            }
        }
    </script>
