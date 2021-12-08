import React, {useState} from "react";

function Newsletter() {
  const [isNewsLetterOpen, toggleNewsletterState] = useState(false)
  return (
    <div className="s-bkgd flex-center padding-2">
      <h1>JOIN NEWSLETTER</h1>
      <form>
        <input type="text" name="name" value="Email Address" onSelect="toggleNewsletterState() => 
        isNewsLetterOpen = true;" />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Newsletter;
