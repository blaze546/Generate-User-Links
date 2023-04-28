function generateLink(user) {
  return `http://www.codewars.com/users/${encodeURIComponent(user)}`;
}


// example generate_link('matt c')
http://www.codewars.com/users/matt%20c
