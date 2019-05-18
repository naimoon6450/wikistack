const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">
    <br></br>

    <div class="form-group">
      <label for="authName" class="col-sm-2 control-label">Author Name</label>
      <div class="col-sm-10">
        <input id="authName" name="authName" type="text" class="form-control"/>
      </div>
    </div>

    <br></br>

    <div class="form-group">
      <label for="email" class="col-sm-2 control-label">Email</label>
      <div class="col-sm-10">
        <input id="email" name="email" type="email" class="form-control"/>
      </div>
    </div>
    
    <br></br>

    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <br></br>

    <div class="form-group">
      <label for="someText" class="col-sm-2 control-label">Text</label>
      <div class="col-sm-10">
        <input id="someText" name="someText" type="textarea" class="form-control"/>
      </div>
    </div>
    
    <br></br>
    
    <div class="form-group">
      <label for="status" class="col-sm-2 control-label">Page Status</label>
      <div class="col-sm-10">
        <input id="status" name="status" type="text" class="form-control"/>
      </div>
    </div>
    
    <br></br>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);