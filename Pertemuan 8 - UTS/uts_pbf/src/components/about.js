import React, { Component } from "react";

class About extends Component {
    render() {
        return (
            <div>
                <h2 align="center">About Me</h2> <br></br>
                <table width="745" border="1" cellspacing="0" cellpadding="5" align="center">
                    <tr>
                        <td>Nama</td>
                        <td>Dandi Agung Setiawan</td>
                        <td rowspan="10" align="center"><img src="./images/dandi.jpg"  width="280" height="313"/></td>
                    </tr>
                    <tr>
                        <td>Jurusan</td>
                        <td>Teknologi Informasi</td>
                    </tr>
                    <tr>
                        <td>Kelas</td>
                        <td>3D</td>
                    </tr>
                    <tr>
                        <td>Jenis Kelamin</td>
                        <td>Laki-laki</td>
                    </tr>
                    <tr>
                        <td>Tempat, Tanggal Lahir</td>
                        <td>Lumajang, 29 Februari 2000</td>
                    </tr>
                    <tr>
                        <td>Alamat</td>
                        <td>Kota Malang</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>dandi.agungs29@gmail.com</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default About;