import DeleteButton from "../buttons/delete";
import UpdateButton from "../buttons/update";

export default function KursusCard(props){
    return(
        <div class="card shadow col p-0 h-25" style={{'border-radius':'15px','border':'none',maxWidth: '20rem',}}>
        <img src="https://static.republika.co.id/uploads/images/inpicture_slide/coding-ilustrasi-_160406100902-246.jpg" class="card-img-top p-0 m-0 w-100" alt="..." style={{ objectFit: "cover", 'border-radius':'15px 15px 0px 0px' }}/>
<div class="card-body">
<h5 class="card-title">Data Science</h5>
<div className="d-flex justify-content-center">
<select className="form-select form-select-sm d-block my-3 w-50" aria-label=".form-select-sm example" style={{'border-radius':'30px',}}>
                <option selected>Draft</option>
                <option value="1">Publish</option>
            </select>
</div>
<div className="">
<a href="#" class="btn btn-thirtiery align-self-end">Detail Kursus</a>
<UpdateButton action={props.actionUpdate} />
<DeleteButton action={props.actionDelete}/>

</div>
</div>
</div>
    )
}