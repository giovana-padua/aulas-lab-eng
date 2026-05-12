
## Componentes
- Sempre com letra maiúscula
- 

## Id
- {receitas.map(receita => (
    <li>
        <Link to={receita.slug}>{receita.nome}</Link>
    </li>
))}