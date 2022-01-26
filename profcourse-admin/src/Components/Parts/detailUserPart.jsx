/** @format */

import { useEffect } from "react";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DetailUserPart() {
  const [dataUser, setDataUser] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const param = useParams();

  const [cookies] = useCookies();
  var jwtToken = cookies.userData.token;
  function getAndSetUserData() {
    axios
      .get(
        `http://3.133.85.122:9090/api/v1/users/d9931549-c9b2-4cf5-83f5-9bdfd14b6011`,
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      )
      .then(function (response) {
        setDataUser(response.data.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setIsLoading(false);
      })
      .then(function () {
        // always executed
      });
  }
  useEffect(() => {
    getAndSetUserData();
  }, []);
  return (
    <div className="mx-5 my-3">
      <h2 className="fw-bold">Pengguna</h2>
      <div className="my-2  py-2">
        <div className="border me-5" style={{ "border-radius": "20px" }}>
          <div className="p-3 m-3">
            <div className="row">
              <div className="col-md-6">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="border">
                      <div className="text-thirtiery">Nama</div>
                      <div className="text-primary fw-bold">
                        {dataUser?.name}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">test</div>
                </div>
              </div>
              <div className="col-lg-6">test</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
