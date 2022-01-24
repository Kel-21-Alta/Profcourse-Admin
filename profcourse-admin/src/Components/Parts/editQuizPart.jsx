/** @format */
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LoadingNormal from "../../assets/loading";

export default function EditQuizPart() {
  const param = useParams();
  //cookies
  const [cookies] = useCookies();
  var jwtToken = cookies.userData.token;
  //axios fetching
  function getQuiz() {
    axios
      .get(`http://3.133.85.122:9090/api/v1/quizs/modul/${param.modul_id}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then(function (response) {
        console.log(response);
        setIsLoading(false);
        setQuizzes(response.data.data);
      })
      .catch(function (error) {
        setIsLoading(false);
        alert(error.response.data.message);
      });
  }

  function getQuizOne(quiz_id) {
    axios
      .get(`http://3.133.85.122:9090/api/v1/quizs/${quiz_id}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then(function (response) {
        console.log(response);
        setIsLoading(false);
        setQuestion({
          pertanyaan: response.data.data.pertanyaan,
          pilihan: response.data.data.pilihan,
          jawaban: response.data.data.jawaban,
          modul_id: param.modul_id,
        });
      })
      .catch(function (error) {
        setIsLoading(false);
        alert(error.response.data.message);
      });
  }

  function deleteQuiz(quiz_id) {
    axios
      .delete(`http://3.133.85.122:9090/api/v1/quizs/${quiz_id}`, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then(function (response) {
        console.log(response);
        setIsLoading(false);
        setDataChange(true);
      })
      .catch(function (error) {
        setIsLoading(false);
        alert(error.response.data.message);
      });
  }

  function addQuiz(quiz) {
    axios
      .post(
        `http://3.133.85.122:9090/api/v1/quizs`,
        {
          pertanyaan: quiz.pertanyaan,
          pilihan: quiz.pilihan,
          jawaban: quiz.jawaban,
          modul_id: quiz.modul_id,
        },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        setIsLoading(false);
        setQuestion(questionDefault);
        setDataChange(true);
      })
      .catch(function (error) {
        setIsLoading(false);
        alert(error.response.data.message);
      });
  }

  function editQuiz(quiz, quiz_id) {
    axios
      .put(
        `http://3.133.85.122:9090/api/v1/quizs/${quiz_id}`,
        {
          pertanyaan: quiz.pertanyaan,
          pilihan: quiz.pilihan,
          jawaban: quiz.jawaban,
          modul_id: quiz.modul_id,
        },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      )
      .then(function (response) {
        console.log(response);
        setIsLoading(false);
        setQuestion(questionDefault);
        setDataChange(true);
      })
      .catch(function (error) {
        setIsLoading(false);
        alert(error.response.data.message);
      });
  }
  //hooks
  const quizzezDefault = [];
  const questionDefault = {
    pertanyaan: "",
    pilihan: [],
    jawaban: "",
    modul_id: param.modul_id,
  };
  const [quizzes, setQuizzes] = useState(quizzezDefault);
  const [question, setQuestion] = useState(questionDefault);
  const [pilihanSatuan, setPilihanSatuan] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [dataChange, setDataChange] = useState(false);

  useEffect(() => {
    console.log(question);
  }, [question]);

  useEffect(() => {
    getQuiz();
    setDataChange(false);
  }, [dataChange]);

  //functions
  const onChangeQuestion = (e) => {
    setQuestion({
      ...question,
      [e.target.name]: e.target.value,
    });
  };

  const onChangePlihanSatuan = (e) => {
    setPilihanSatuan(e.target.value);
  };

  const handleTambahPilihan = (e) => {
    setQuestion({ ...question, pilihan: [...question.pilihan, pilihanSatuan] });
  };

  const getJawaban = (quiz_id) => {
    getQuizOne(quiz_id);
  };

  const handleDeletePilihan = (pilih) => {
    console.log(pilih);
    const pilihanBaru = question.pilihan.filter((_, i) => i !== pilih);
    console.log("pilihan baru", pilihanBaru);
    setQuestion({
      ...question,
      pilihan: pilihanBaru,
    });
  };

  const handleDelete = (quiz_id) => {
    setIsLoading(true);
    deleteQuiz(quiz_id);
    setDataChange(true);
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    setPilihanSatuan("");
    const newQuestion = question;
    addQuiz(newQuestion);
    e.preventDefault();
  };

  const handleSubmitEdit = (quiz_id) => {
    setIsLoading(true);
    setPilihanSatuan("");
    const newQuestion = question;
    editQuiz(newQuestion, quiz_id);
  };
  return (
    <>
      <div className="mx-5 my-3">
        <h2 className="fw-bold">Ubah Quiz</h2>
        <div
          className="container py-3 px-3 mt-4"
          style={{
            width: "100%",
            backgroundColor: "#DEE2E6",
            "border-radius": "15px",
            border: "none",
          }}>
          {isLoading ? (
            <div className="text-center">
              {" "}
              <LoadingNormal></LoadingNormal>
            </div>
          ) : (
            <ol>
              {quizzes?.map((item) => (
                <li className="border p-3">
                  <div className="my-1">
                    <div className="fw-bold">Pertanyaan:</div>
                    <div>{item.pertanyaan}</div>
                  </div>
                  <div className="my-1">
                    <div className="fw-bold">Pilihan:</div>
                    <ul>
                      {item.pilihan.map((item) => {
                        return <li className="list">{item}</li>;
                      })}
                    </ul>
                  </div>
                  <div></div>
                  <div className="d-flex gap-1 justify-content-end">
                    <button
                      className="btn btn-thirtiery"
                      data-toggle="modal"
                      data-target={`#ubahQuestion_${item.id}`}
                      onClick={() => getJawaban(item.id)}>
                      Ubah
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(item.id)}>
                      Hapus
                    </button>
                  </div>
                  {/* MODAL MODAL */}
                  <div>
                    {/* Modal Buat Modul*/}
                    <div
                      className="modal fade"
                      id={`ubahQuestion_${item.id}`}
                      tabIndex={-1}
                      aria-labelledby={`ubahQuestion_${item.id}`}
                      aria-hidden="true">
                      <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                              Edit Quiz
                            </h5>
                            <button
                              type="button"
                              className="btn"
                              data-dismiss="modal"
                              aria-label="Close"
                              onClick={() => setQuestion(questionDefault)}>
                              <span aria-hidden="true">×</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <form className="my-3">
                              <div className="form-group mb-3">
                                <label className="fw-normal mb-2" htmlFor="">
                                  Pertanyaan
                                </label>
                                <textarea
                                  name="pertanyaan"
                                  type="text"
                                  className="form-control"
                                  placeholder="Masukkan pertanyaan disini"
                                  value={question.pertanyaan}
                                  onChange={onChangeQuestion}
                                  required
                                />
                              </div>
                              <div className="form-group mb-3">
                                <label className="fw-normal mb-2" htmlFor="">
                                  Buat Pilihan
                                </label>
                                <input
                                  name="pilihan"
                                  type="text"
                                  className="form-control"
                                  value={pilihanSatuan}
                                  placeholder="masukkan pilihan"
                                  onChange={onChangePlihanSatuan}
                                  required
                                />
                                <button
                                  type="button"
                                  className="btn btn-thirtiery shadow"
                                  onClick={handleTambahPilihan}>
                                  Tambah Pilihan
                                </button>
                              </div>
                              <div className="form-group mb-3">
                                <label className="fw-normal mb-2" htmlFor="">
                                  Jawaban
                                </label>
                                <input
                                  name="jawaban"
                                  type="text"
                                  className="form-control"
                                  placeholder="masukkan pilihan"
                                  value={question.jawaban}
                                  onChange={onChangeQuestion}
                                  required
                                />
                              </div>
                              <div className="border p-3">
                                <h6>Draft Edit pertanyaan</h6>
                                <div>
                                  <div className="fw-bold">Pertanyaan:</div>
                                  <div>{question.pertanyaan}</div>
                                </div>
                                <div>
                                  <div className="fw-bold">Pilihan:</div>
                                  {question.pilihan.map((item, index) => {
                                    return (
                                      <ul className="d-flex ms-3">
                                        <li className="list">
                                          <div>{item}</div>
                                        </li>
                                        <button
                                          type="button"
                                          className="text-danger ms-5"
                                          onClick={() =>
                                            handleDeletePilihan(index)
                                          }>
                                          hapus
                                        </button>
                                      </ul>
                                    );
                                  })}
                                </div>

                                <div>
                                  <div className="fw-bold">Jawaban:</div>
                                  <div>{question.jawaban}</div>
                                </div>
                              </div>
                            </form>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-thirtiery"
                              data-dismiss="modal"
                              onClick={() => handleSubmitEdit(item.id)}>
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          )}
        </div>

        <form onSubmit={handleSubmit} className="my-3">
          <div className="form-group mb-3">
            <label className="fw-normal mb-2" htmlFor="">
              Pertanyaan
            </label>
            <textarea
              name="pertanyaan"
              type="text"
              className="form-control"
              placeholder="Masukkan pertanyaan disini"
              value={question.pertanyaan}
              onChange={onChangeQuestion}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label className="fw-normal mb-2" htmlFor="password">
              Buat Pilihan
            </label>
            <input
              name="pilihan"
              type="text"
              className="form-control"
              value={pilihanSatuan}
              placeholder="masukkan pilihan"
              onChange={onChangePlihanSatuan}
              required
            />
            <button
              type="button"
              className="btn btn-thirtiery shadow"
              onClick={handleTambahPilihan}>
              Tambah Pilihan
            </button>
          </div>
          <div className="form-group mb-3">
            <label className="fw-normal mb-2" htmlFor="password">
              Jawaban
            </label>
            <input
              name="jawaban"
              type="text"
              className="form-control"
              placeholder="masukkan pilihan"
              value={question.jawaban}
              onChange={onChangeQuestion}
              required
            />
          </div>
          <div className="border p-3">
            <h6>Draft pertanyaan</h6>
            <div>
              <div className="fw-bold">Pertanyaan:</div>
              <div>{question.pertanyaan}</div>
            </div>
            <div>
              <div className="fw-bold">Pilihan:</div>
              {question.pilihan.map((item, index) => {
                return (
                  <div className="d-flex ms-3">
                    <li className="list">
                      <div>{item}</div>
                    </li>
                    <button
                      type="button"
                      className="text-danger ms-5"
                      onClick={() => handleDeletePilihan(index)}>
                      hapus
                    </button>
                  </div>
                );
              })}
            </div>

            <div>
              <div className="fw-bold">Jawaban:</div>
              <div>{question.jawaban}</div>
            </div>
          </div>
          <div className="form-group d-flex justify-content-end gap-2 my-2">
            <Link to="/kursus">
              {" "}
              <button className="btn btn-danger shadow">Kembali</button>
            </Link>
            <button type="submit" className="btn btn-thirtiery shadow">
              Tambah Pertanyaan
            </button>
          </div>
        </form>

        {isLoading && <div>Menambahkan pertanyaan</div>}
      </div>
    </>
  );
}
