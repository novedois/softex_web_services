import express from 'express';
import routes from './routes';

const app = express();

app.listen(3000);

app.get('/alunos', (req, res) => {
	return res.json(alunos);
});

app.post('/alunos', (req, res) => {
	const { aluno } = req.body;
	alunos.push(aluno);
	return res.json(alunos);
});

app.put('/alunos/3', (req, res) => {
	const { index } = req.params;
	const { aluno } = req.body;
	alunos[index] = aluno;
	return res.json(aluno);
});

app.delete('/alunos/3', (req, res) => {
	const { index } = req.params;
	alunos.splice(index, 1);
	return res.send();
});