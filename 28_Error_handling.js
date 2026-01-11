//try-catch example.

try {
  let lastName = 'Yetayeh'
  let fullName = fistName + ' ' + lastName
} catch (err) {
  console.log('Name error:', err.name)
  console.log('Error message:', err.message)
} finally {
  console.log('final executed')
}

