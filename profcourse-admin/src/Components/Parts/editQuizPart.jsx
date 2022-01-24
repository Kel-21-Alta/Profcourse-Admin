/** @format */
import { useParams } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
  //hooks
  const quizzezDefault = [];
  const questionDefault = {
    pertanyaan: "",
    pilihan: [],
    jawaban: "",
    modul_id: param.modul_id,
  };
  const pilihanDefault = [];
  const [quizzes, setQuizzes] = useState(quizzezDefault);
  const [question, setQuestion] = useState(questionDefault);
  const [pilihan, setPilihan] = useState(pilihanDefault);
  const [pilihanSatuan, setPilihanSatuan] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [dataChange, setDataChange] = useState(false);

  useEffect(() => {
    console.log(question);
  }, [question]);

  useEffect(() => {
    getQuiz();
  }, [dataChange]);

  //functions
  const onChangeQuestion = (e) => {
    console.log(e);
    setQuestion({
      ...question,
      [e.target.name]: e.target.value,
    });
  };

  const onChangePlihanSatuan = (e) => {
    console.log(e);
    setPilihanSatuan(e.target.value);
  };

  const handleTambahPilihan = (e) => {
    setQuestion({ ...question, pilihan: [...question.pilihan, pilihanSatuan] });
  };

  const handleSubmit = (e) => {
    setIsLoading(true);
    const newQuestion = question;
    addQuiz(newQuestion);
    e.preventDefault();
  };
  return (
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
        <ol>
          {quizzes?.map((item) => (
            <li className="border p-3">
              <div className="my-1">
                <div className="fw-bold">Pertanyaan:</div>
                <div>{item.pertanyaan}</div>
              </div>
              <div className="my-1">
                <div className="fw-bold">Pilihan:</div>
                {item.pilihan.map((item) => {
                  return <div>- {item}</div>;
                })}
              </div>
              <div>
                <div className="fw-bold">Jawaban:</div>
                <div>{item.jawaban}</div>
              </div>
            </li>
          ))}
        </ol>
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
            {question.pilihan.map((item) => {
              return <div>{item}</div>;
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
  );
}
