import React, { useState} from "react";

function Newsletter() {

  const [fullForm, setFullForm] = useState(false);
  const [checked, setChecked] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  const handleInputChange = ()  => {
      setChecked(!checked);
    };

  return (
    <div className="s-bkgd flex-center padding-2">
      <h1>JOIN NEWSLETTER</h1>
      <p>Join our newsletter to recieve specials and promotions via email.</p>
      <form style={{lineHeight: "6vmin", width: "40%"}} onSubmit={handleSubmit}>
        <input style={{width: "75%", borderRadius: "3vmin", paddingLeft: "3vmin", marginBottom: "3vmin", border: 0}} type="text" name="email" defaultValue="Email Address"
          onSelect={() => setFullForm(true)} />
        <input style={{width: "20%", borderRadius: "3vmin", backgroundColor: "#6e9ee6", color: "#ffffff", marginLeft: 10, border: 0}} type="submit" value="Submit" />
        {fullForm && (
          <div>
            <input style={{width: "75%", borderRadius: "3vmin", paddingLeft: "3vmin", border:0}} type="text" name="name" defaultValue="Name" />
            <br />
            <label>
              <input name="agree" type="checkbox" checked={checked} onChange={handleInputChange} style={{marginRight: "2vmin"}} />
              I Agree
            </label>
            <br />
            <p style={{lineHeight: "3vmin"}}>By clicking submit you agree to recieve our newsletter via email. If you choose to provide us with your email address or any other personally identifiable information, we will use it only to send you our newsletter or respond to your query. If you choose to unsubscribe from the newsletters, you’ll stop receiving any newsletters.</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default Newsletter;
