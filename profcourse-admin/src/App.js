import './App.css';

function App() {
  return (
    <div>
      <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-secondary">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-black text-decoration-none">
                <img src="logo.png" alt="img-fluid"/>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <a href="#" class="nav-link">
                           <div className="d-inline"> <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.832009 14C0.281416 12.7384 -0.00186939 11.3765 9.28321e-06 10C9.28321e-06 4.477 4.47701 0 10 0C15.523 0 20 4.477 20 10C20.0019 11.3765 19.7186 12.7384 19.168 14H0.832009ZM17.748 12C18.0515 10.8183 18.0807 9.58278 17.8334 8.38803C17.586 7.19328 17.0687 6.07093 16.321 5.10684C15.5732 4.14276 14.6148 3.36248 13.5192 2.82569C12.4235 2.2889 11.2196 2.00984 9.99951 2.00984C8.77943 2.00984 7.5755 2.2889 6.47985 2.82569C5.38419 3.36248 4.42582 4.14276 3.67807 5.10684C2.93031 6.07093 2.41297 7.19328 2.16563 8.38803C1.91828 9.58278 1.94749 10.8183 2.25101 12H17.748ZM10 5C9.73479 5 9.48044 4.89464 9.2929 4.70711C9.10537 4.51957 9.00001 4.26522 9.00001 4C9.00001 3.73478 9.10537 3.48043 9.2929 3.29289C9.48044 3.10536 9.73479 3 10 3C10.2652 3 10.5196 3.10536 10.7071 3.29289C10.8947 3.48043 11 3.73478 11 4C11 4.26522 10.8947 4.51957 10.7071 4.70711C10.5196 4.89464 10.2652 5 10 5ZM5.00001 9C4.73479 9 4.48044 8.89464 4.2929 8.70711C4.10537 8.51957 4.00001 8.26522 4.00001 8C4.00001 7.73478 4.10537 7.48043 4.2929 7.29289C4.48044 7.10536 4.73479 7 5.00001 7C5.26523 7 5.51958 7.10536 5.70712 7.29289C5.89465 7.48043 6.00001 7.73478 6.00001 8C6.00001 8.26522 5.89465 8.51957 5.70712 8.70711C5.51958 8.89464 5.26523 9 5.00001 9ZM15 9C14.7348 9 14.4804 8.89464 14.2929 8.70711C14.1054 8.51957 14 8.26522 14 8C14 7.73478 14.1054 7.48043 14.2929 7.29289C14.4804 7.10536 14.7348 7 15 7C15.2652 7 15.5196 7.10536 15.7071 7.29289C15.8947 7.48043 16 7.73478 16 8C16 8.26522 15.8947 8.51957 15.7071 8.70711C15.5196 8.89464 15.2652 9 15 9ZM10 6C10.2652 6 10.5196 6.10536 10.7071 6.29289C10.8947 6.48043 11 6.73478 11 7V10C11 10.2652 10.8947 10.5196 10.7071 10.7071C10.5196 10.8946 10.2652 11 10 11C9.73479 11 9.48044 10.8946 9.2929 10.7071C9.10537 10.5196 9.00001 10.2652 9.00001 10V7C9.00001 6.73478 9.10537 6.48043 9.2929 6.29289C9.48044 6.10536 9.73479 6 10 6Z" fill="#3252DF"/>
                            </svg>
                            </div>
                        <span class="mx-3 d-sm-inline fw-bold">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Kursus</span> </a>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Pengguna</span></a>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-bootstrap"></i> <span class="ms-1 d-none d-sm-inline">Permintaan</span></a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col py-3">
            Content area...
        </div>
    </div>
</div>

    </div>
  );
}

export default App;
