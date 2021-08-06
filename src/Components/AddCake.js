export function AddCake() {
    return(
        <div class="add-cake p-4 my-4" style={{width:"80%",margin:"auto",background:"whitesmoke"}}>
            <h3 class="text-center mb-3" style={{color:"#38768a"}}><b>Add Cake Detail</b>s</h3>
            <form>
                <div class="form-group mb-3">
                    <div class="input-group">
                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04"/>
                            <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
                        </div>
                        <div class="input-group-append ml-3">
                            <button class="btn btn-primary" type="button" id="inputGroupFileAddon04">Upload</button>
                        </div>
                    </div>
                </div>
                <div class="form-group mb-3">
                    <label for="name">Cake Name</label>
                    <input type="Text" class="form-control" id="name" placeholder="Enter Cake Name"/>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6 mb-3">
                        <label for="price" >Price:</label>
                        <input type="number" class="form-control" id="price" placeholder="Enter Cake Price"/>
                    </div>
                    <div class="form-group  col-md-6 mb-3">
                            <label for="weight">Weight:</label>
                    <input type="number" class="form-control" id="weight"  placeholder="Enter Cake Weight in kg"/>
                    </div>
                </div>
                <div class="form-group mb-3">
                    <label for="description">Description</label>
                    <input type="text" class="form-control" id="description"  placeholder="Enter Cake Description"/>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6  mb-3">
                        <label for="type">Type</label>
                        <select id="type" class="form-control">
                            <option selected>Select Type</option>
                            <option>Pastrey cake</option>
                            <option>Sponge Cake</option>
                        </select>
                    </div> 
                    <div class="form-group col-md-6 d-flex align-item-center mb-3 mt-4">
                        <label for="eggless" class="mr-1 mb-0">Eggless</label>
                        <div class="form-check">
                            <input class="form-check-input ml-3" type="checkbox" id="eggless"/>
                        </div>
                    </div>
                </div>
                <div class="form-group mb-3">
                    <label for="flavor">Flavor</label>
                    <input type="text" class="form-control" id="flavor"  placeholder="Enter Cake Flavor"/>
                </div>
                
                <button type="submit" class="btn btn-primary">Add Product</button>
                </form>
        </div>
    );
}