export class Categoria{
  public id:number
  public nome: string
  public imagem:string
  public descricao:string
  //public produto:Produto[]



}

/*
@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@NotNull
	@Size(max =50)
	private String nome;

	@URL
	private String imagem;

	@NotNull
	@Size(max= 200)
	private String descricao;

	@OneToMany(mappedBy = "categoria", cascade = CascadeType.ALL)
	@JsonIgnoreProperties("categoria")
	private List<Produto> produto; */
