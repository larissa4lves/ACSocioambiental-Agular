export class User{
public id: number
public nome: string
public email: string
public senha: string
public usuario: string
public foto: string
public tipo: string
}

/*
@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY )
	private long id;

	@NotNull
	@Size(min=5, max=50)
	private String nome;

	@NotNull
	@Email
	private String email;

	@NotNull
	@Size(max=100)
	private String senha ;

	@NotNull
	@Size(min = 5, max = 100)
	private String usuario;

	private String foto;

	private String tipo;
	 */
